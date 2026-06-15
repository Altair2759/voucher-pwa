// Page were REGGIE VAUDIN Will make the main page what the user sees first
"use client";
import Button from "@/components/Button";



export default function Home() {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1>Voucher PWA App</h1>
      <p>Welcome to the system</p>
      {/* Example buttons with the Three types of sizes */}
      <Button text="Large" onClick={() => alert("largeButton works!!")} type="large"/>
      <Button text="Meduim" onClick={() => alert("Meduim Button works!!")} type="meduim"/>
      <Button text="Small" onClick={() => alert("Small Button works!!")} type="small"/>
    </div>
  );
}
