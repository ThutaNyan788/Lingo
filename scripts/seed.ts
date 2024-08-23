import "dotenv/config"
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../db/schema';


const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql,{schema});


const main = async ()=>{
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);




        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/es.svg"
            },
            {
                id:2,
                title:"Italian",
                imageSrc:"/it.svg"
            },
            {
                id:3,
                title:"French",
                imageSrc:"/fr.svg"
            },
            {
                id:4,
                title:"Croatian",
                imageSrc:"/hr.svg"
            }

        ]);


        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1,
                title:"Unit 1",
                description:"Learn the basic of Spanish",
                order:1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,
                title:"Nouns",
                order:1,
            },
            {
                id:2,
                unitId:1,
                title:"Verbs",
                order:2,
            }
        ]);


        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,
                type:"SELECT",
                order:1,
                question:'Which one of these is "a man"?',
            }
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id:1,
                challengeId:1,
                correct:true,
                imageSrc:"/man.png",
                audioSrc:"/es_man.mp3",
                text:"el hombre",
            },
            {
                id:2,
                challengeId:1,
                correct:false,
                imageSrc:"/woman.png",
                audioSrc:"/es_woman.mp3",
                text:"la mujer",
            },
            {
                id:3,
                challengeId:1,
                correct:false,
                imageSrc:"/robot.png",
                audioSrc:"/es_robot.mp3",
                text:"el robot",
            },
        ]);



        console.log("Seeding Finished");
        
    } catch (error) {
        throw new Error("Failed to seed database");
    }
}

main();