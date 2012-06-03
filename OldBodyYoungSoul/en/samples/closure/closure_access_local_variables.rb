index = 123

puts "index before changes #{index}"

def change_in_local_index
 #puts "index just before" + index
  index = 1
  lambda { 3.times {puts index +=1 } }
end

change_in_local_index.call

puts "index after changes #{index}"
