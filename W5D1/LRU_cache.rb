  class LRUCache
    attr_reader :size
    
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
      @underlying_array.delete(ele) if @underlying_array.inculde?(ele)

      if self.count <= self.max_size
        @underlying_array << ele
      else
        @underlying_array << ele
        @underlying_array.shift
      end

    end

    def show
      # shows the items in the cache, with the LRU item first
      @underlying_array[-1]
    end

    private
    # helper methods go here!


  end