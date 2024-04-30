from openai import OpenAI
client = OpenAI(api_key='sk-proj-tsi0YJqA2CtjvpZsJsF8T3BlbkFJZcvVcqynO3GzG2FyXzkF')

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(completion.choices[0].message)