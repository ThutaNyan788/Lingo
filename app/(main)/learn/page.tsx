import Header from "./header"
import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from "@/components/user-progress"
import { getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import React from 'react'

export default async function LearnPage() {

  const userProgressData = getUserProgress();

  let [userProgress] = await Promise.all([userProgressData]);


  if(!userProgress || !userProgress.activeCourseId) {
    redirect('/courses');
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
          <UserProgress
          activeCourse={{title:"Spanish",imageSrc:"/es.svg"}}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
          />
        </StickyWrapper>
        <FeedWrapper>
          <Header title="Spanish" />
          
        </FeedWrapper>
    </div>
  )
}
