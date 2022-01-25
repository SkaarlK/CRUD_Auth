'use strict'

const Client = use('App/Models/Client');
const LogController = require('./LogController');
const Logger = new LogController;

class ClientController {
  async index () {
    const clients = await Client.all()
      .then(el => el);
    return clients;
  }

  async store ({ request, auth }) {
    const data = request.only(['name', 'product', 'value', 'card']);
    const client = await Client.create({ user_id: auth.user.id, ...data })
      .then(el => el);
    const log = await Logger.store({
      data: {
        sell_id: client.id,
        action: `SOLD`,
        new_state: client,
      },
      auth
    }).then(log => log);
    return client;
  }

  async show ({ params }) {
    const client = await Client.findBy('id', params.id)
      .then(el => el);
    return client;
  }

  async update ({ params, request, auth }) {
    const data = request.only(['name', 'product', 'value', 'card']);
    const client = await Client.findBy('id', params.id)
      .then(el => el);
    const bck = {...client.$attributes};
    Object.keys(data).forEach(prop => {
      client[prop] = data[prop];
    })
    client.last_updt = auth.user.id;
    const log = await Logger.store({
      data: {
        sell_id: bck.id,
        action: `UPDATED FIELDS: ${Object.keys(data)}`,
        old_state: bck,
        new_state: data
      },
      auth
    }).then(el => el);
    await client.save();
    return (client, log);
  }

  async destroy ({ params, auth }) {
    const client = await Client.findBy('id', params.id)
      .then(async (el) => {
        if (el) {
          const log = await Logger.store({
            data: {
              sell_id: el.id,
              action: `DELETED SELL`,
              old_state: el,
            },
            auth
          }).then(log => log);
          el.delete();
        }
      })
    return client;
  }
}

module.exports = ClientController
