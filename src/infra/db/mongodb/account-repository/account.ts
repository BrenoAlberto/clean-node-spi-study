import { Document, WithId } from 'mongodb'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(account)
    const createdAccount = await accountCollection.findOne({ _id: result.insertedId })

    const {
      _id, ...accountWitoutId
    } = createdAccount as WithId<Document>

    return {
      id: _id.toString(),
      ...accountWitoutId
    } as unknown as AccountModel
  }
}
