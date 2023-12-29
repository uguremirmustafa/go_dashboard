package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/uguremirmustafa/go_dashboard/backend/internal/database"
)

func (apiCfg *apiConfig) handlerCreateWidget(w http.ResponseWriter, r *http.Request) {

	type parameters struct {
		Name        string `json:"name"`
		Description string `json:"description"`
	}

	decoder := json.NewDecoder(r.Body)

	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %s", err))
		return
	}
	description := sql.NullString{}

	if params.Description != "" {
		description.String = params.Description
		description.Valid = true
	}
	widget, err := apiCfg.DB.CreateWidget(r.Context(), database.CreateWidgetParams{
		ID:          uuid.New(),
		CreatedAt:   time.Now().UTC(),
		UpdatedAt:   time.Now().UTC(),
		Name:        params.Name,
		Description: description,
	})

	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("couldnt create widget: %s", err))
		return
	}

	respondWithJSON(w, 201, dbWidgetToWidget(widget))
}

func (apiCfg *apiConfig) handlerGetWidgets(w http.ResponseWriter, r *http.Request) {
	widgets, err := apiCfg.DB.GetWidgets(r.Context())
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("couldnt get widgets: %s", err))
		return
	}

	respondWithJSON(w, 200, dbWidgetsToWidgets(widgets))
}
