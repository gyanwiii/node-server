const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
//create server
http.createServer((req, res) => {
    //Route to serve CSS file
    if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname,'page_path','style.css'), (err, data) => {
            if (err) {
                //Sending 500 Internal Server Error
                res.writeHead(500);
                res.end('Internal Server Error');
            }
            else {
                //Serving CSS file
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
        return;
    }
    //Home Route
    if (req.url === '/' || req.url === '/home') {
        fs.readFile(path.join(__dirname,'page_path','home.html'), (err, data) => {
            if (err) {
                //Sending 500 Internal Server Error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            else {
                //Serving Home HTML file
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Menu Route
    else if (req.url === '/menu') {
        fs.readFile(path.join(__dirname,'page_path','menu.html'), (err, data) => {
            if (err) {
                //Sending 500 Internal Server Error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            else {
                //Serving Menu HTML file
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // About Route
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname,'page_path','about.html'), (err, data) => {
            if (err) {
                // Sending 500 Internal Server Error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            else {
                // Serving About HTML file
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Contact Route
    else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname,'page_path','contact.html'), (err, data) => {
            if (err) {
                //  Sending 500 Internal Server Error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
            else {
                // Serving Contact HTML file
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    //404 Route
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
    //Start the server at PORT 3000
}).listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});