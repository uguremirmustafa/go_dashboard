package main

import (
	"time"

	"github.com/google/uuid"
	"github.com/uguremirmustafa/go_dashboard/backend/internal/database"
)

type User struct {
	ID        uuid.UUID `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	Username  string    `json:"username"`
}

func dbUserToUser(dbUser database.User) User {
	return User{
		ID:        dbUser.ID,
		UpdatedAt: dbUser.UpdatedAt,
		CreatedAt: dbUser.CreatedAt,
		Username:  dbUser.Username,
	}
}
