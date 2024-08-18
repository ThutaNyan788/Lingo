"use client";
import React from "react";
import { courses, userProgress } from "@/db/schema";
import Card from "./card";
import { useRouter } from "next/navigation";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props={
    courses:typeof courses.$inferInsert[],
    activeCourseId:typeof userProgress.$inferInsert['activeCourseId']
}


export default function List({
    courses,
    activeCourseId
}:Props) {

  const router = useRouter()
  const [pending,startTransition] = React.useTransition();


  const onClick = (id:number)=>{
    if(pending) return;

    if(id === activeCourseId){
      return router.push('/learn');
    }

    startTransition(()=>{
      upsertUserProgress(id).
      catch((error)=>toast.error("Something went wrong"));
    })
  }

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat
    (auto-ill,minmax(210px,1fr))] gap-4">
        {courses.map((course)=>(
            <Card
            key={course.id}
            id={course.id!}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={()=>onClick(course.id!)}
            disabled={pending}
            active={course.id===activeCourseId}
            />
        ))}
    </div>
  )
}
