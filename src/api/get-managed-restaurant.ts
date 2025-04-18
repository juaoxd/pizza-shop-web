import { api } from '@/lib/axios'

interface GetManagedRestaurantReponse {
  id: string
  name: string
  description: string
  managerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantReponse>(
    '/managed-restaurant',
  )

  return response.data
}
