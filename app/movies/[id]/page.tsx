"use client";

import Video from "ui/video";

import { Suspense } from "react";
import { CardSkeleton } from "ui/skeletons";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className=" w-full p-8 flex justify-center">
      <Suspense key={params.id} fallback={<CardSkeleton/>} >
        <Video id={params.id} width={'80%'} height={'700'}/>
      </Suspense>
    </div>
  );
}
