import typia from "typia";

console.log(
  "Succeeded to fix #174",
  typia.is<string>("Hellow world"),
  typia.is<string>(3.141592),
);