
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"
import Link from "next/link"
import { connectToDb } from "@/app/(Engine)/mongodb/database";
import User from "@/app/(Engine)/models/user";
import Image from "next/image"
import ImageForm from "@/app/components/ImageForm";
import {uploader} from "@/app/(Engine)/actions/uploader";


const Profile = async ({ params }) => {
    await connectToDb();
    const cluster = await User.findOne({ name: params.profile })
    const { name, _id, email, address, picture, phone } = cluster



  const session = await getServerSession(options)
  console.log(session, "session in user details page")

  

  return (
    <div className='mx-10 py-32'>
      <p>Profile</p>
      <h1 className="text-5xl"> {session?.user.name === params.profile ? 
        "Hello! " + session?.user.name :
        params.profile + "'s profile"}
      </h1>
        
      <div className="flex py-5 items-center ">
        <div className="flex justify-center items-center py-5 pr-10">
          <Image
            src={picture}
            alt={name}
            width="50"
            height="50"
          />
        </div>
          <div>
            <div>Email: {email}</div>
            <div>Phone No: {phone} </div>
          <div >Serial No:  <span className='text-blue-500'># {_id.toString()}</span></div>
          <div className="text-2xl font-light text-green-700">{address}</div>
          </div>
      </div>
     
      <div className="flex items-center">
        <div>
          <Link href={`/users/${session?.user.name}/${_id.toString()}`}>
          <button className='btn btn-outline mr-2 my-5'>
            Update
          </button>
                </Link>
        </div>
        {session?.user.name === "Admin" ?
          <div>
            <div className="flex justify-between items-center ">
            <Link href='/users'>
              <button className="btn btn-primary mx-2 my-5">
                Users
              </button>
            </Link>
            <Link href='/product_panel'>
              <button className="btn btn-primary mx-2 my-5">
                Add Product
              </button>
            </Link>
            </div>
            <ImageForm up={uploader } />
          </div>
          :
        null}
      </div>
    </div>
  )
}

export default Profile