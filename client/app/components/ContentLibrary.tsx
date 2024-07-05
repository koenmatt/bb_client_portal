'use client'

import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const files = [
  {
    title: "Sample Video 1",
    size: "3.9 MB",
    videoId: "L61p2uyiMSo",
    thumbnail: "https://img.youtube.com/vi/L61p2uyiMSo/0.jpg",
  },
  {
    title: "Sample Video 2",
    size: "4.5 MB",
    videoId: "ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/0.jpg",
  },
  //... Other video files
];

export default function ContentLibrary() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  }

  return (
    <div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.videoId} className="relative">
            <div
              className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 
              focus-within:ring-2 focus-within:ring-bb-gray-100 dark:focus-within:ring-bb-gray-800 focus-within:ring-offset-2 
              focus-within:ring-offset-gray-100 cursor-pointer"
              onClick={() => openModal(file.videoId)}
            >
              <img src={file.thumbnail} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">Play {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-bbgray-300">{file.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500 dark:text-bbgray-500">{file.size}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}