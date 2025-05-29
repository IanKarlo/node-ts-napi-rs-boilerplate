#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn say_hello() -> String {
  "Hello, World!".to_string()
}

#[napi]
pub fn say_hello_to(name: String) -> String {
  format!("Hello, {}!!!!", name)
}
