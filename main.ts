import db from "./src/db.server";

async function main() {
  try {
    const users = await db.users.findMany();
    console.log(users);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await db.$disconnect();
  }
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.error("Error:", e);
  });
