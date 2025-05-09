import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "@/app/(Engine)/mongodb/database";
import User from "@/app/(Engine)/models/user"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import { redirect } from "next/navigation"






export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                name: { label: "Username", type: "text", placeholder: "Johndoe" },
                password: { label: "Password", type: "password" },
                email: {label: "Email", type: "text", placeholder: "@example.com"},
            },
            async authorize(credentials) {
               try { 
                await connectToDb()
                
                const user = await User.findOne({
                   email: credentials?.email
                })
                console.log(user.name, " found")
           
                   if (!user) {
                       console.log("User dosen't exist")
                       return null;   
                };
                 
                const hashedPassword = await bcrypt.compare(credentials?.password, user.password)  
                
                   console.log(hashedPassword, "password")

                   if (!hashedPassword) {
                       console.log( "password incorrect")
                       return null;
                   }

                   console.log("correct! i dey inside")
                   return user;
               } catch (error) {
                   console.log( "server error",  { status: 500 })
               }
                }
            }),
    
    ],
    
    
    pages: {
    signIn: '/',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
    
    secret: process.env.NEXTAUTH_SECRET,
    
    // debug: process.env.NODE_ENV === "development",
    
    callbacks: {
        async jwt({ token, user }) {

           
            if (user) {
                console.log(user.name, " callbaack user") 
               
            
                    
                    token.admin = user.admin
                
                    token.picture = user.picture
               
                    token.image = user.image
                
                   
                
                    token.id = user._id.toString()
                
                  
                
            }
             
            return token

        },

        async session({ session, token }) {

    
            if (token) {
                
                session.user.admin = token.admin
                session.user.id = token.id
                session.user.image = token.image
                session.user.picture = token.picture
                
            }

            return session

        },
        
       authorized(auth, request) {
            const loggedIn = auth?.user
            const onHomePage = request.nextUrl.pathname.startsWith("/")
            if (onHomePage) {
                if (loggedIn) return true
                return false
            } else if (loggedIn) {
                return new NextResponse(redirect("/"))
            }

            return true;
            
        },
    }
        
}