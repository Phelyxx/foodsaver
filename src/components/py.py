# Define the data as a list of dictionaries
import random
data = [
  { "month": 1, "Vegetables": 35.1, "Bakery": 14.7, "Meats": 12.6, "Grains": 6.3, "Dairy": 11.7 },
  { "month": 12, "Vegetables": 4.2, "Bakery": 2.6, "Meats": 2.7, "Grains": 1.6, "Dairy": 1.638 },
]

# Define a function to reduce the values by 0.88%
def reduce_by_088(values):
  # Create an empty dictionary to store the reduced values
  reduced_values = {}
  # Loop through the keys and values in the dictionary
  for key, value in values.items():
    # Get a random number between 0.75 and 1.1:
    number = random.uniform(0.7, 1.05)
    reduced_value = round(value * (number), 1)
    # Store the reduced value in the new dictionary with the same key
    reduced_values[key] = reduced_value
  # Return the new dictionary
  return reduced_values

# Create an empty list to store the modified data
modified_data = []

# Loop through the data from month 1 to month 12
for month in range(1, 13):
  # Find the dictionary that matches the current month
  for item in data:
    if item["month"] == month:
      # Add the item to the modified data list
      modified_data.append(item)
      # Break the loop
      break
  else:
    # If no matching item is found, use the previous item and reduce the values by 0.88%
    previous_item = modified_data[-1]
    reduced_item = reduce_by_088(previous_item)
    # Set the month key to the current month
    reduced_item["month"] = month
    # Add the reduced item to the modified data list
    modified_data.append(reduced_item)

# Print the modified data list
print(modified_data)
