import React from 'react'
import { useState, useEffect, addDecorator } from '@storybook/client-api'
import { worker } from '../src/mocks'

// Start the Mock Service Worker outside of a story's scope.
// There should be a single instance of the Service Worker
// that affects all the network communication that stories may issue.
const mockPromise = worker.start()

addDecorator((storyFn) => {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    mockPromise.then(() => setReady(true))
  }, [])

  // Wait until the mocks are enabled before rending a story.
  if (!isReady) {
    return <p>Loading...</p>
  }

  // Render a story.
  return storyFn()
})