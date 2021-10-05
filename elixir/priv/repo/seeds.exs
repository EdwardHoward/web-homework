# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Homework.Repo
alias Homework.Transactions.Transaction
alias Homework.Users.User
alias Homework.Merchants.Merchant

edward_user_id = Ecto.UUID.generate
walmart_merchant_id = Ecto.UUID.generate
bestbuy_merchant_id = Ecto.UUID.generate

Repo.insert!(%User{
  id: edward_user_id,
  dob: "05/27/1993",
  first_name: "Edward",
  last_name: "Howard",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})


Repo.insert!(%Merchant{
  id: walmart_merchant_id,
  name: "walmart",
  description: "walmart",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})


Repo.insert!(%Merchant{
  id: bestbuy_merchant_id,
  name: "bestbuy",
  description: "bestbuy",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})

Repo.insert!(%Transaction{
  id: Ecto.UUID.generate,
  user_id: edward_user_id,
  merchant_id: walmart_merchant_id,
  description: "cleaningsupplies",
  amount: 150,
  credit: false,
  debit: true,
  inserted_at: ~N[2021-10-02 14:00:00],
  updated_at: ~N[2021-10-02 14:00:00]
})

Repo.insert!(%Transaction{
  id: Ecto.UUID.generate,
  user_id: edward_user_id,
  merchant_id: bestbuy_merchant_id,
  description: "a big tv",
  amount: 150,
  credit: false,
  debit: true,
  inserted_at: ~N[2021-10-02 14:00:00],
  updated_at: ~N[2021-10-02 14:00:00]
})
