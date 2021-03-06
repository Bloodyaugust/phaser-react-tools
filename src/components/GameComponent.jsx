import { GameProvider } from '../contexts/GameContext'
import PropTypes from 'prop-types'
import React from 'react'
import usePhaser from '../hooks/usePhaser'

/**
 * A higher-order React functional component that manages the Phaser game.
 *
 * @function
 * @module GameComponent
 * @param {Object} props The component props.
 * @param {Array|Object} [props.children] The child components.
 * @param {Object} props.config The config object for the Phaser game instance.
 * @see module:usePhaser
 * @see module:GameProvider
 */
export default function GameComponent({ children, config }) {
  const [canvasRef, game] = usePhaser(config)
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <GameProvider value={game}>{children}</GameProvider>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

GameComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  config: PropTypes.object.isRequired
}
