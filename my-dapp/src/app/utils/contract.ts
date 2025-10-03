import { client } from './client'
import abi from '../abi.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`

export async function readMessage() {
  return client.readContract({
    address: contractAddress,
    abi: abi as any,
    functionName: 'getMessage',
    args: [],
  })
}
