import { groq, createClient } from "next-sanity";
import { client } from './client';
import { Project } from "../types/Project";

export async function getProjects(): Promise<Project[]> {
    return client.fetch(
        groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "image": image_two.asset->url,
      url,
      content,
    }`
    );
}