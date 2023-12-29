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

type Widget struct {
	ID          uuid.UUID `json:"id"`
	Name        string    `json:"name"`
	Description *string   `json:"description"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

func dbWidgetToWidget(dbWidget database.Widget) Widget {
	var description *string
	if dbWidget.Description.Valid {
		description = &dbWidget.Description.String
	}

	return Widget{
		ID:          dbWidget.ID,
		UpdatedAt:   dbWidget.UpdatedAt,
		CreatedAt:   dbWidget.CreatedAt,
		Name:        dbWidget.Name,
		Description: description,
	}
}

func dbWidgetsToWidgets(dbWidgets []database.Widget) []Widget {
	widgets := []Widget{}

	for _, item := range dbWidgets {
		widgets = append(widgets, dbWidgetToWidget(item))
	}

	return widgets
}
