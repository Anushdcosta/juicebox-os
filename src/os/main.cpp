#include <string>
#include <cstring>
#include <emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    char output_buffer[1024];

    EMSCRIPTEN_KEEPALIVE
    const char* hello() {
        return "Hello from Anush";
    }

    EMSCRIPTEN_KEEPALIVE
    const char* handle_command(const char* input) {
        std::string command(input);
        std::string response;
        if (command == "help") {
            response = "Available commands: help, clear, version";
        } else if (command == "version") {
            response = "JuiceboxOS v0.1";
        } else if (command == "clear") {
            response = "";
        } else {
            response = "Unknown command: " + command;
        }

        std::strncpy(output_buffer, response.c_str(), sizeof(output_buffer));
        output_buffer[sizeof(output_buffer) - 1] = '\0';
        return output_buffer;
    }
}
