
export default function () {
  if (!process.server) {
    console.log("from not a server");
    // return redirect("/welcome")
  }
}
