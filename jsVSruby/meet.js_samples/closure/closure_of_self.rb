class LocalClosureClass
  @instance_variable = 'LocalClosureClassInstanceVariable'

  def closure
    lambda { self}
  end
end

class ClientOfClosureClass
 attr_reader :local_closure
  
  def initialize local_closure_instance
    @local_closure = local_closure_instance.closure
  end

  def closure_self
    @local_closure.call
  end
end

local_closure = LocalClosureClass.new
client_of_closure = ClientOfClosureClass.new local_closure

puts "Clinet self info: #{client_of_closure} local closure self info #{client_of_closure.closure_self}"

