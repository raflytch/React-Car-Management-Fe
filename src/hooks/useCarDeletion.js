import { useCallback } from "react";
import Swal from "sweetalert2";
import { deleteCar } from "../services/cars.service";

const useCarDeletion = (onSuccessDelete) => {
  const handleDelete = useCallback(
    async (carId) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
          const response = await deleteCar(carId);

          if (response.success) {
            await Swal.fire(
              "Deleted!",
              "Car has been deleted successfully.",
              "success"
            );
            if (onSuccessDelete) {
              onSuccessDelete();
            }
          } else {
            throw new Error(response.message);
          }
        }
      } catch (error) {
        Swal.fire("Error!", error.message || "Failed to delete car", "error");
      }
    },
    [onSuccessDelete]
  );

  return { handleDelete };
};

export default useCarDeletion;