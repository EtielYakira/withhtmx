package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	fmt.Println("run!")

	h1 := func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("./public/index.html"))
		tmpl.Execute(w, nil)
	}
	http.HandleFunc("/", h1)

	ans := func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("./public/answer.html"))
		tmpl.Execute(w, nil)
	}
	http.HandleFunc("/answer", ans)

	log.Fatal(http.ListenAndServe(":8080", nil))

}
