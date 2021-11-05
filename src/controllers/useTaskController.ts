import api from '@/services/api'
import { TaskModel, TaskResponseModel} from '@/types/task.model'

const save = async (task: TaskModel) => {
  return await api.post<TaskResponseModel>('tasks', task).then((response) => {
    return response
  })
}

export default function useTaskController() {
  return {
    save,
  }
}
