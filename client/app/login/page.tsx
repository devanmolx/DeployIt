"use client";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";
import app from "@/utils/firebase";

export default function LoginPage() {

  const auth = getAuth(app);
  const provider = new GithubAuthProvider();
  provider.addScope("repo");
  provider.addScope("read:user");

  async function signInWithGithub() {

    const result = await signInWithPopup(auth, provider);
    console.log(result)
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    const repos = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
      },
    }).then(res => res.json());

  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto font-bold text-2xl mb-2 flex items-center justify-center">
            <span className="bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center mr-2">D</span>
            Deploy
          </Link>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={signInWithGithub} variant="outline" className="w-full gap-2">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button className="w-full" disabled>
              Email (Coming Soon)
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>
              {" "}and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}