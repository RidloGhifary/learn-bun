const hashed = await Bun.password.hash("secret", {
  algorithm: "bcrypt",
  cost: 10,
});
console.info("🚀 ~ hashed:", hashed);

const verified = await Bun.password.verify("secret", hashed, "bcrypt");
console.info("🚀 ~ verified:", verified);
