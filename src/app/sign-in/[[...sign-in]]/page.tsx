import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full relative flex place-items-center grid">
        <SignIn />
      </div>
    </main>
  );
}
