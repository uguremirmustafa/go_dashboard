// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.24.0
// source: widgets.sql

package database

import (
	"context"
	"database/sql"
	"time"

	"github.com/google/uuid"
)

const createWidget = `-- name: CreateWidget :one
INSERT INTO widgets (id, created_at, updated_at, name, description)
VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
    )
RETURNING id, name, description, created_at, updated_at
`

type CreateWidgetParams struct {
	ID          uuid.UUID
	CreatedAt   time.Time
	UpdatedAt   time.Time
	Name        string
	Description sql.NullString
}

func (q *Queries) CreateWidget(ctx context.Context, arg CreateWidgetParams) (Widget, error) {
	row := q.db.QueryRowContext(ctx, createWidget,
		arg.ID,
		arg.CreatedAt,
		arg.UpdatedAt,
		arg.Name,
		arg.Description,
	)
	var i Widget
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Description,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getWidgets = `-- name: GetWidgets :many
SELECT id, name, description, created_at, updated_at
FROM widgets
`

func (q *Queries) GetWidgets(ctx context.Context) ([]Widget, error) {
	rows, err := q.db.QueryContext(ctx, getWidgets)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Widget
	for rows.Next() {
		var i Widget
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Description,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}