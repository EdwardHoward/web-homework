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

first_user_id = Ecto.UUID.generate
second_user_id = Ecto.UUID.generate

walmart_merchant_id = Ecto.UUID.generate
bestbuy_merchant_id = Ecto.UUID.generate

Repo.insert!(%User{
  id: first_user_id,
  dob: "03/15/1993",
  first_name: "First",
  last_name: "User",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})

Repo.insert!(%User{
  id: second_user_id,
  dob: "01/05/1991",
  first_name: "Second",
  last_name: "User",
  inserted_at: ~N[2021-10-20 14:00:00],
  updated_at: ~N[2021-10-20 14:00:00]
})


Repo.insert!(%Merchant{
  id: walmart_merchant_id,
  name: "Walmart",
  description: "Walmart",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})


Repo.insert!(%Merchant{
  id: bestbuy_merchant_id,
  name: "Best Buy",
  description: "Best Buy",
  inserted_at: ~N[2021-09-17 14:00:00],
  updated_at: ~N[2021-09-17 14:00:00]
})

Repo.insert!(%Transaction{
  id: Ecto.UUID.generate,
  user_id: first_user_id,
  merchant_id: walmart_merchant_id,
  description: "cleaning supplies",
  amount: 150,
  credit: false,
  debit: true,
  inserted_at: ~N[2021-10-02 14:00:00],
  updated_at: ~N[2021-10-02 14:00:00]
})

Repo.insert!(%Transaction{
  id: Ecto.UUID.generate,
  user_id: first_user_id,
  merchant_id: bestbuy_merchant_id,
  description: "a big tv",
  amount: 1000,
  credit: false,
  debit: true,
  inserted_at: ~N[2021-10-02 14:00:00],
  updated_at: ~N[2021-10-02 14:00:00]
})

Repo.insert!(%Transaction{
  id: Ecto.UUID.generate,
  user_id: second_user_id,
  merchant_id: walmart_merchant_id,
  description: "food",
  amount: 50,
  credit: true,
  debit: false,
  inserted_at: ~N[2021-10-02 14:00:00],
  updated_at: ~N[2021-10-02 14:00:00]
})
