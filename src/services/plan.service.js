import axios from 'axios'

class PlanService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/plan`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllPlans({ origin, destination, date, duration, typePlan }, planSort) {
        return this.api.get(`/getPlans?origin=${origin}&destination=${destination}&date=${date}&duration=${duration}&typePlan=${typePlan}&${planSort}`)
    }

    getMyPlans() {
        return this.api.get(`/getMyPlans`)
    }

    getRandomPlans() {
        return this.api.get('/getRandomPlans')
    }

    getOriginPlan() {
        return this.api.get('/getOriginPlan')
    }

    getDestinationPlan() {
        return this.api.get('/getDestinationPlan')
    }

    getTypePlan() {
        return this.api.get('/getTypePlan')
    }

    getOnePlan(plan_id, typePlan) {
        return this.api.get(`/getOnePlan/${plan_id}`, typePlan)
    }

    createPlan(planData) {
        return this.api.post('/createPlan', planData)
    }

    deletePlan(plan_id) {
        return this.api.delete(`/deletePlan/${plan_id}`)
    }

    editPlan(plan_id, planData) {
        return this.api.put(`/editPlan/${plan_id}`, planData)
    }
}

const planService = new PlanService()

export default planService