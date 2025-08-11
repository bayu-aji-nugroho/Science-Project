import { db } from '@/lib/firebase/init';
import { collection, getDocs, query } from 'firebase/firestore';


async function getPretestTopics() {
 
  const topicsCollectionRef = collection( db, 'matematika');
  
  const topicsQuery = query(topicsCollectionRef);
  const topicSnapshot = await getDocs(topicsQuery);

  if (topicSnapshot.empty) {
    return [];
  }


  const topics = topicSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      slug: doc.id,
      updatedAt: data.updatedAt?.toDate() || new Date(),
    };
  });

  return topics;
}

export default async function sitemap() {
  const baseUrl = "https://bermatematika.my.id";


  const pretestTopics = await getPretestTopics();

  
  const topicUrls = pretestTopics.map(topic => {
    return {
      
      url: `${baseUrl}/Math/${topic.slug}`,
      lastModified: topic.updatedAt,
      priority: 0.7, 
    };
  });


  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Math`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];


  return [...staticUrls, ...topicUrls];
}