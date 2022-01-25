'use strict'

const Log = use('App/Models/Log');

class LogController {

  async index () {
    const logs = await Log.all();
    return logs;
  }

  async store ({ data, auth }) {
    const log = await Log.create({ user_id: auth.user.id, ...data })
      .then(el => el);
    return log;
  }

  async show ({ params }) {
  }
}

module.exports = LogController
