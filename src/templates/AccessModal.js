
const { Modal, TextInputComponent } = require('discord-modals');
const { AIRLINE_ID } = require('../constants/configuration');

const ACCESS_REQUEST_MODAL = new Modal()
  .setCustomId('access-form')
  .addComponents([
    new TextInputComponent()
      .setCustomId('pilot-id')
      .setLabel('Pilot ID')
      .setStyle('SHORT')
      .setMinLength(7)
      .setMaxLength(8)
      .setPlaceholder(`${AIRLINE_ID}0001`)
      .setRequired(true),
    new TextInputComponent()
      .setCustomId('name')
      .setLabel('Name')
      .setStyle('SHORT')
      .setPlaceholder('Barry Scott')
      .setRequired(true)
  ])

module.exports = ACCESS_REQUEST_MODAL;
