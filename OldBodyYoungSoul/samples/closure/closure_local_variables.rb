message = 'default message'
count = 1

def change_context_for_local_varibale
  count = 2
  message = "second message"
  yield
end

change_context_for_local_varibale do 
  puts "Params value in closure -  message: #{message} and count: #{count}"
end
