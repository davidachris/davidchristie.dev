package database

import (
	"davidchristie-dev/services"
	"sync"

	_ "github.com/glebarez/go-sqlite"
	"github.com/jmoiron/sqlx"
)

var (
	s3db *sqlx.DB
	mu   sync.RWMutex
)

func InitDb(s3Scv *services.S3Serivce, s3Details *services.S3Details) error {
	if s3db != nil {
		return nil
	}
	mu.Lock()
	defer mu.Unlock()
	s3Scv.DownloadFile(s3Details.BucketName, s3Details.Key, s3Details.FileName)
	newDb, err := sqlx.Open("sqlite", s3Details.FileName)
	if err != nil {
		return err
	}
	s3db = newDb
	return nil
}

func Write(fn func(db *sqlx.DB) error) {
	mu.Lock()
	defer mu.Unlock()
	err := fn(s3db)
	if err != nil {
		return
	}
	s3Scv, s3Details := services.ConfigAws()
	s3Scv.UploadFile(s3Details.BucketName, s3Details.Key, s3Details.FileName)
}

func Read(fn func(db *sqlx.DB)) {
	mu.RLock()
	defer mu.RUnlock()
	fn(s3db)
}
