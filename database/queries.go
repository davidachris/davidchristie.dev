package database

import (
	"davidchristie-dev/models"

	"github.com/jmoiron/sqlx"
)

func GetUserById(id uint64) (*models.User, error) {
	user := models.User{}
	var readErr error
	Read(func(db *sqlx.DB) {
		readErr = db.Select(&user, "SELECT * FROM user WHERE id=$1;", id)
	})
	if readErr != nil {
		return nil, readErr
	}
	return &user, nil
}

func GetUserByEmail(email string) (*models.User, error) {
	user := models.User{}
	var readErr error
	Read(func(db *sqlx.DB) {
		readErr = db.Select(&user, "SELECT * FROM users WHERE email=$1;", email)
	})
	if readErr != nil {
		return nil, readErr
	}

	return &user, nil
}

func GetUserSession(sessionId string) (*uint64, error) {
	var userId uint64
	var readErr error
	Read(func(db *sqlx.DB) {
		readErr = db.Select(&userId, "SELECT user_id FROM sessions WHERE session_id=$1;", sessionId)
	})
	if readErr != nil {
		return nil, readErr
	}
	return &userId, nil

}

func CreateUser(user models.User) {
	var writeErr error
	Write(func(db *sqlx.DB) error {
		tx := db.MustBegin()
		_, writeErr = tx.NamedExec("INSERT INTO users (name, email, phone, password) VALUES (:name, :email, :phone, :password)", &user)
		tx.Commit()
		return writeErr
	})
}
