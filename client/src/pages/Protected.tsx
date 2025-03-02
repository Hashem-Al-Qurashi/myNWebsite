
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Protected() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      navigate('/signin')
      return
    }
    
    const fetchProtectedContent = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/protected-content', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setMessage(response.data.message)
      } catch (err) {
        console.error('Error fetching protected content:', err)
        if (axios.isAxiosError(err) && err.response?.status === 401) {
          setError('Your session has expired. Please sign in again.')
          localStorage.removeItem('token')
          setTimeout(() => navigate('/signin'), 2000)
        } else {
          setError('An error occurred while fetching protected content.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProtectedContent()
  }, [navigate])

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Protected Content</CardTitle>
          <CardDescription>This page is only accessible to authenticated users</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {message}
              </div>
              <Button 
                onClick={() => {
                  localStorage.removeItem('token')
                  navigate('/signin')
                }}
                variant="outline"
              >
                Sign Out
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
