import React from "react"
import Image from "next/image"
import clsx from "clsx"

type Props = {
  url: string
  alt: string
  width?: number
  height?: number
  fetching?: boolean
  className?: string
  unoptimized?: boolean
  priority?: boolean
}
const LoaderImage: React.FC<Props> = ({
  url,
  alt,
  width,
  height,
  className,
  fetching = false,
  unoptimized,
  priority,
}) => {
  const [loading, setLoading] = React.useState(true)

  //aspect-w-1 aspect-h-1 w-full flex-1
  return (
    <div
      className={`bg-transparent overflow-hidden rounded xl:aspect-w-7 xl:aspect-h-8 ${className}`}
    >
      {url && url.length > 0 ? (
        <Image
          alt={alt}
          src={url}
          width={width}
          height={height}
          unoptimized={unoptimized}
          priority={priority}
          objectFit="cover"
          className={clsx(
            "duration-700 ease-in-out group-hover:opacity-75",
            loading || fetching ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : null}
    </div>
  )
}

export default LoaderImage
