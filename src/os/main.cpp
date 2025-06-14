
#include <emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    const char* hello() {
        return "Hello from Anush";
    }
}
