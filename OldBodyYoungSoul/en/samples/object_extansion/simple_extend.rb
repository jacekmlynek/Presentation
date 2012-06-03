object_to_extend = Object.new
not_extented_object = Object.new

object_to_extend.instance_eval do 
  def say_something
    puts 'somthing on object to extend'
  end
end

object_to_extend.say_something if object_to_extend.respond_to? 'say_something'
not_extented_object.say_something if not_extented_object.respond_to? 'say_something'
