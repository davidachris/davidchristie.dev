package models

type User struct {
	Id       uint64 `db:"id"`
	Name     string `json:"name" db:"name"`
	Email    string `json:"email" db:"email"`
	Phone    string `json:"phone" db:"phone"`
	Password string `json:"password" db:"password"`
}
