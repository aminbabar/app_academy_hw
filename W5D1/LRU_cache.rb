  class LRUCache
    attr_reader :max_size
    
    def initialize(max_size)
        @underlying_array = []
        @max_size = max_size
    end

    def count
      # returns number of elements currently in cache
      @underlying_array.length
    end

    def add(ele)
      # adds element to cache according to LRU principle
      @underlying_array.delete(ele) if @underlying_array.include?(ele)

      if self.count < self.max_size
        @underlying_array << ele
      else
        @underlying_array << ele
        @underlying_array.shift
      end

    end

    def show
      # shows the items in the cache, with the LRU item first
      @underlying_array
    end

    private
    # helper methods go here!


  end


  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  p johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})


  p johnny_cache.show #== [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]