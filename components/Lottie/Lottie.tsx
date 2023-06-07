import { Ref, forwardRef, useEffect, useRef } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import clsx from 'clsx'

type Props = {
  className?: string
  src?: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
}

export const Lottie = forwardRef(function Lottie(
  { className, src, autoplay, loop, speed }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const player = useRef<Player | null>(null)

  useEffect(() => {
    player.current?.setPlayerSpeed(speed ?? 1)
  }, [speed])

  useEffect(() => {
    player.current?.setLoop(loop ?? false)
    player.current?.play()
  }, [loop])

  useEffect(() => {
    if (autoplay) player.current?.play()
    else player.current?.stop()
  }, [autoplay])

  return (
    <div className={clsx(className, 'aspect-square')} ref={ref}>
      {src ? (
        <Player ref={player} src={src} autoplay={autoplay} loop={loop} speed={speed} />
      ) : (
        <span>No URL set.</span>
      )}
    </div>
  )
})
