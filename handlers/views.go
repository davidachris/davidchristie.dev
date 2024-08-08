package handlers

import (
	"davidchristie-dev/internal"
	"davidchristie-dev/views"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Home(c echo.Context) error {
	return internal.Render(c, http.StatusOK, views.HomeView())
}

func Signup(c echo.Context) error {
	return internal.Render(c, http.StatusOK, views.SignUpView())
}

func Login(c echo.Context) error {
	return internal.Render(c, http.StatusOK, views.LoginView())
}
