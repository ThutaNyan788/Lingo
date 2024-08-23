import Header from "./header"
import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from "@/components/user-progress"
import { getUnits, getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import React from 'react'
import { stringify } from "querystring"

export default async function LearnPage() {

  const userProgressData = getUserProgress();
  const unitsData = getUnits();

  let [userProgress,units] = await Promise.all([userProgressData,unitsData]);

  
  


  

  if(!userProgress || !userProgress.activeCourseId) {
    redirect('/courses');
  }

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
          <UserProgress
          activeCourse={userProgress?.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
          />
        </StickyWrapper>
        <FeedWrapper>
          <Header title={userProgress.activeCourse.title} />
          {JSON.stringify(units)}
        </FeedWrapper>
    </div>
  )
}
